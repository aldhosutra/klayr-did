import { Service } from '..';

export interface AddServiceEndpointParam {
  target: string;
  endpoint: Service;
  signer: string;
  signature: Buffer;
}
