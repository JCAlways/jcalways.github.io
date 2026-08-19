// 百度主动推送
// 1. token 注入：优先使用环境变量 BAIDU_TOKEN（由 CI secrets 提供），
//    避免将 token 明文提交到仓库
// 2. 自定义命令 npx hexo baidu-submit：直接调用 hexo-baidu-url-submit 的 deployer，
//    绕过 _config.yml 中的 git deploy 配置（避免 npx hexo deploy 触发 git push）

if (process.env.BAIDU_TOKEN) {
  var cfg = hexo.config.baidu_url_submit || {};
  cfg.token = process.env.BAIDU_TOKEN;
  hexo.config.baidu_url_submit = cfg;
}

hexo.extend.console.register('baidu-submit', 'Submit latest urls to Baidu', function (args) {
  var deployer = hexo.extend.deployer.get('baidu_url_submitter');
  if (!deployer) {
    hexo.log.error('baidu_url_submitter deployer not found, run: npm install hexo-baidu-url-submit --save');
    return;
  }
  hexo.log.info('Submitting latest urls to Baidu...');
  return Promise.resolve(Reflect.apply(deployer, this, [args]));
});
