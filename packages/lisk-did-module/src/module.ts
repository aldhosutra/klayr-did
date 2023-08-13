/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/member-ordering */

import { BaseModule, ModuleInitArgs, ModuleMetadata, TransactionExecuteContext } from 'lisk-sdk';
import { AddControllersCommand } from './commands/add_controllers_command';
import { AddKeysCommand } from './commands/add_keys_command';
import { AddServiceEndpointCommand } from './commands/add_service_endpoints_command';
import { CreateCommand } from './commands/create_command';
import { DeactivateCommand } from './commands/deactivate_command';
import { RemoveControllersCommand } from './commands/remove_controllers_command';
import { RemoveKeysCommand } from './commands/remove_keys_command';
import { RemoveServiceEndpointCommand } from './commands/remove_service_endpoint_command';
import { DidEndpoint } from './endpoint';
import { DidMethod } from './method';
import { DocumentStore } from './stores/document';
import { NonceStore } from './stores/nonce';
import { AddControllersEvent } from './events/add_controllers_event';
import { AddKeysEvent } from './events/add_keys_event';
import { AddServiceEndpointEvent } from './events/add_service_endpoint_event';
import { CreateEvent } from './events/create_event';
import { DeactivateEvent } from './events/deactivate_event';
import { RemoveControllersEvent } from './events/remove_controllers_event';
import { RemoveKeysEvent } from './events/remove_keys_event';
import { RemoveServiceEndpointEvent } from './events/remove_service_endpoint_event';
import { DidModuleConfig } from '@lisk-did/lisk-decentralized-identifier';
import { initializeAddressDID } from './logic/create_did';

export class DidModule extends BaseModule {
  private chainspace: string = '';
  private autoCreateAddressDID: boolean = false;

  private _didEndpoint = new DidEndpoint(this.stores, this.offchainStores);
  private _didMethod = new DidMethod(this.stores, this.events);

  public endpoint = this._didEndpoint;
  public method = this._didMethod;

  public commands = [
    new CreateCommand(this.stores, this.events),
    new AddKeysCommand(this.stores, this.events),
    new RemoveKeysCommand(this.stores, this.events),
    new AddControllersCommand(this.stores, this.events),
    new RemoveControllersCommand(this.stores, this.events),
    new AddServiceEndpointCommand(this.stores, this.events),
    new RemoveServiceEndpointCommand(this.stores, this.events),
    new DeactivateCommand(this.stores, this.events),
  ];

  public constructor() {
    super();
    // registeration of stores and events

    this.stores.register(DocumentStore, new DocumentStore(this.name, 0));
    this.stores.register(NonceStore, new NonceStore(this.name, 1));

    this.events.register(AddControllersEvent, new AddControllersEvent(this.name));
    this.events.register(AddKeysEvent, new AddKeysEvent(this.name));
    this.events.register(AddServiceEndpointEvent, new AddServiceEndpointEvent(this.name));
    this.events.register(CreateEvent, new CreateEvent(this.name));
    this.events.register(DeactivateEvent, new DeactivateEvent(this.name));
    this.events.register(RemoveControllersEvent, new RemoveControllersEvent(this.name));
    this.events.register(RemoveKeysEvent, new RemoveKeysEvent(this.name));
    this.events.register(RemoveServiceEndpointEvent, new RemoveServiceEndpointEvent(this.name));
  }

  public metadata(): ModuleMetadata {
    return {
      ...this.baseMetadata(),
      endpoints: [],
      assets: [],
    };
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async init(args: ModuleInitArgs): Promise<void> {
    const { moduleConfig } = args as unknown as { moduleConfig: DidModuleConfig };
    if (moduleConfig.chainspace === undefined) {
      throw new Error('To use the DID module, make sure to configure "module.did.chainspace" in the config.json file!');
    }
    if (typeof moduleConfig.chainspace !== 'string') {
      throw new Error('Please ensure that "module.did.chainspace" is specified as a string in the config.json file!.');
    }
    this.chainspace = moduleConfig.chainspace;
    this.autoCreateAddressDID = moduleConfig.autoCreateAddressDID ?? true;
    this.commands.forEach(command => command.init(moduleConfig));
    this._didEndpoint.init(moduleConfig);
    this._didMethod.init(moduleConfig);
  }

  public async beforeCommandExecute(_context: TransactionExecuteContext): Promise<void> {
    if (this.autoCreateAddressDID) {
      const documentStore = this.stores.get(DocumentStore);
      await initializeAddressDID(_context, documentStore, this.chainspace, _context.transaction.senderPublicKey);
    }
  }
}
