'use strict';
(self.webpackChunklisk_did_docs = self.webpackChunklisk_did_docs || []).push([
  [3085],
  {
    8398: (e, t, a) => {
      a.r(t), a.d(t, { default: () => o });
      var l = a(2784),
        n = a(6277),
        c = a(328),
        r = a(211),
        m = a(3310),
        i = a(9414),
        s = a(8188);
      const d = { mdxPageWrapper: 'mdxPageWrapper_SLvB' };
      function o(e) {
        const { content: t } = e,
          {
            metadata: { title: a, description: o, frontMatter: p },
          } = t,
          { wrapperClassName: _, hide_table_of_contents: g } = p;
        return l.createElement(
          c.FG,
          { className: (0, n.Z)(_ ?? r.k.wrapper.mdxPages, r.k.page.mdxPage) },
          l.createElement(c.d, { title: a, description: o }),
          l.createElement(
            m.Z,
            null,
            l.createElement(
              'main',
              { className: 'container container--fluid margin-vert--lg' },
              l.createElement(
                'div',
                { className: (0, n.Z)('row', d.mdxPageWrapper) },
                l.createElement(
                  'div',
                  { className: (0, n.Z)('col', !g && 'col--8') },
                  l.createElement('article', null, l.createElement(i.Z, null, l.createElement(t, null))),
                ),
                !g &&
                  t.toc.length > 0 &&
                  l.createElement(
                    'div',
                    { className: 'col col--2' },
                    l.createElement(s.Z, {
                      toc: t.toc,
                      minHeadingLevel: p.toc_min_heading_level,
                      maxHeadingLevel: p.toc_max_heading_level,
                    }),
                  ),
              ),
            ),
          ),
        );
      }
    },
  },
]);
