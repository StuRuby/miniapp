module.exports = function(platform) {
  switch (platform) {
    case 'ali':
      return {
        'rax-view': 'view'
      };
    case 'wechat':
      return {
        'rax-view': 'view',
        'rax-text': 'text'
      };
    case 'bytedance':
      return {
        'rax-view': 'view',
        'rax-text': 'text',
        'rax-image': 'image',
        'rax-icon': 'icon',
        'rax-scrollview': 'scroll-view'
      };
  }
};
