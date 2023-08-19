'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [4013],
  {
    3485: (e, t, a) => {
      a.d(t, { Z: () => E });
      var l = a(2784),
        r = a(6277),
        n = a(3310),
        s = a(7963),
        i = a(9817),
        c = a(1077);
      const m = {
        sidebar: 'sidebar_RYHo',
        sidebarItemTitle: 'sidebarItemTitle_sRjx',
        sidebarItemList: 'sidebarItemList_uMtB',
        sidebarItem: 'sidebarItem_rygH',
        sidebarItemLink: 'sidebarItemLink_EKgd',
        sidebarItemLinkActive: 'sidebarItemLinkActive_hRXJ',
      };
      function o(e) {
        let { sidebar: t } = e;
        return l.createElement(
          'aside',
          { className: 'col col--3' },
          l.createElement(
            'nav',
            {
              className: (0, r.Z)(m.sidebar, 'thin-scrollbar'),
              'aria-label': (0, c.I)({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description: 'The ARIA label for recent posts in the blog sidebar',
              }),
            },
            l.createElement('div', { className: (0, r.Z)(m.sidebarItemTitle, 'margin-bottom--md') }, t.title),
            l.createElement(
              'ul',
              { className: (0, r.Z)(m.sidebarItemList, 'clean-list') },
              t.items.map(e =>
                l.createElement(
                  'li',
                  { key: e.permalink, className: m.sidebarItem },
                  l.createElement(
                    i.Z,
                    {
                      isNavLink: !0,
                      to: e.permalink,
                      className: m.sidebarItemLink,
                      activeClassName: m.sidebarItemLinkActive,
                    },
                    e.title,
                  ),
                ),
              ),
            ),
          ),
        );
      }
      var d = a(7548);
      function g(e) {
        let { sidebar: t } = e;
        return l.createElement(
          'ul',
          { className: 'menu__list' },
          t.items.map(e =>
            l.createElement(
              'li',
              { key: e.permalink, className: 'menu__list-item' },
              l.createElement(
                i.Z,
                { isNavLink: !0, to: e.permalink, className: 'menu__link', activeClassName: 'menu__link--active' },
                e.title,
              ),
            ),
          ),
        );
      }
      function u(e) {
        return l.createElement(d.Zo, { component: g, props: e });
      }
      function b(e) {
        let { sidebar: t } = e;
        const a = (0, s.i)();
        return t?.items.length
          ? 'mobile' === a
            ? l.createElement(u, { sidebar: t })
            : l.createElement(o, { sidebar: t })
          : null;
      }
      function E(e) {
        const { sidebar: t, toc: a, children: s, ...i } = e,
          c = t && t.items.length > 0;
        return l.createElement(
          n.Z,
          i,
          l.createElement(
            'div',
            { className: 'container margin-vert--lg' },
            l.createElement(
              'div',
              { className: 'row' },
              l.createElement(b, { sidebar: t }),
              l.createElement(
                'main',
                {
                  className: (0, r.Z)('col', { 'col--7': c, 'col--9 col--offset-1': !c }),
                  itemScope: !0,
                  itemType: 'http://schema.org/Blog',
                },
                s,
              ),
              a && l.createElement('div', { className: 'col col--2' }, a),
            ),
          ),
        );
      }
    },
    3270: (e, t, a) => {
      a.r(t), a.d(t, { default: () => E });
      var l = a(2784),
        r = a(6277),
        n = a(1077);
      const s = () =>
        (0, n.I)({ id: 'theme.tags.tagsPageTitle', message: 'Tags', description: 'The title of the tag list page' });
      var i = a(328),
        c = a(211),
        m = a(3485),
        o = a(4178);
      const d = { tag: 'tag_YYDp' };
      function g(e) {
        let { letterEntry: t } = e;
        return l.createElement(
          'article',
          null,
          l.createElement('h2', null, t.letter),
          l.createElement(
            'ul',
            { className: 'padding--none' },
            t.tags.map(e => l.createElement('li', { key: e.permalink, className: d.tag }, l.createElement(o.Z, e))),
          ),
          l.createElement('hr', null),
        );
      }
      function u(e) {
        let { tags: t } = e;
        const a = (function (e) {
          const t = {};
          return (
            Object.values(e).forEach(e => {
              const a = (function (e) {
                return e[0].toUpperCase();
              })(e.label);
              (t[a] ??= []), t[a].push(e);
            }),
            Object.entries(t)
              .sort((e, t) => {
                let [a] = e,
                  [l] = t;
                return a.localeCompare(l);
              })
              .map(e => {
                let [t, a] = e;
                return { letter: t, tags: a.sort((e, t) => e.label.localeCompare(t.label)) };
              })
          );
        })(t);
        return l.createElement(
          'section',
          { className: 'margin-vert--lg' },
          a.map(e => l.createElement(g, { key: e.letter, letterEntry: e })),
        );
      }
      var b = a(4390);
      function E(e) {
        let { tags: t, sidebar: a } = e;
        const n = s();
        return l.createElement(
          i.FG,
          { className: (0, r.Z)(c.k.wrapper.blogPages, c.k.page.blogTagsListPage) },
          l.createElement(i.d, { title: n }),
          l.createElement(b.Z, { tag: 'blog_tags_list' }),
          l.createElement(m.Z, { sidebar: a }, l.createElement('h1', null, n), l.createElement(u, { tags: t })),
        );
      }
    },
    4178: (e, t, a) => {
      a.d(t, { Z: () => i });
      var l = a(2784),
        r = a(6277),
        n = a(9817);
      const s = { tag: 'tag_qE9H', tagRegular: 'tagRegular_aHXt', tagWithCount: 'tagWithCount_UC8q' };
      function i(e) {
        let { permalink: t, label: a, count: i } = e;
        return l.createElement(
          n.Z,
          { href: t, className: (0, r.Z)(s.tag, i ? s.tagWithCount : s.tagRegular) },
          a,
          i && l.createElement('span', null, i),
        );
      }
    },
  },
]);
