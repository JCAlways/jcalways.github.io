// SEO 优化脚本
// 1. 清理 Butterfly 主题在非文章/非首页页面输出的空 JSON-LD 脚本标签
//    （structured_data.pug 中 jsonLdScript 未定义时仍会渲染 <script> 标签）
// 2. 为 target="_blank" 的链接自动补全 rel="noopener noreferrer"
//    （防反向 tabnabbing 安全风险，同时满足现代浏览器对 rel 的要求）
hexo.extend.filter.register('after_render:html', function (str) {
  // 1. 移除空 JSON-LD
  str = str.replace(/<script type="application\/ld\+json">\s*<\/script>/g, '');

  // 2. target="_blank" 链接补全 rel
  //    仅处理未带 rel 的链接；已有 rel 但缺 noopener/noreferrer 的追加
  str = str.replace(
    /<a\s+([^>]*?\btarget="_blank")([^>]*?)>/g,
    function (match, targetAttr, rest) {
      var relMatch = /\brel="([^"]*)"/.exec(rest);
      if (!relMatch) {
        // 无 rel：插入完整 rel
        return '<a ' + targetAttr + ' rel="noopener noreferrer"' + rest + '>';
      }
      var rel = relMatch[1];
      if (/\b(noopener|noreferrer)\b/.test(rel)) {
        return match;
      }
      // 有 rel 但缺 noopener/noreferrer：追加
      return match.replace(relMatch[0], 'rel="' + rel + ' noopener noreferrer"');
    }
  );

  return str;
});
