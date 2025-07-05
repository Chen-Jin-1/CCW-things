const cj_icon = 'https://m.ccw.site/avatar/678cc9343778fc282d6252c5/4f8f1c67-6a2d-4670-bc70-a774bfe43b93.png';
const bg_image = 'https://m.ccw.site/works-covers/617a5ac1-1944-400a-abc0-fbb3ea3e8d92.png';
const extensionId = 'cjjgc'
// 隐匿踪迹
Scratch.runtime.extensionManager.vm.toJSON
delete Scratch.runtime[`ext_${extensionId}`]
delete Scratch.runtime.extensionManager._customExtensionInfo[extensionId]
Scratch.runtime.extensionManager._loadedExtensions.delete(extensionId)
class cjjgc {
  constructor() {
    this.wait();
    var box = document.querySelector(".c-modal-wrap.c-modal-has-title.c-modal-enter.c-modal-enter-active");
    box?.querySelector(".btn-DxL3n.btn-xmiddle-1XiJB.btn-primary-2CEZZ.c-modal-footer-button").click()
  }
  async wait() {
    await this.waitForElement(".c-modal-wrap.c-modal-has-title.c-modal-enter.c-modal-enter-active")
  }
  getInfo() {
    return {
      id: 'cjjgc',
      name: '跳过警告窗',
      color1: '#00aeff',
      menuIconURI: cj_icon,
      blocks: [
        {
          opcode: 'jgczy',
          text: '占位（警告窗）',
          blockType: null,
        }
      ],
    }
  }
  jgzcy() {}
  waitForElement(selector) {
      return new Promise((resolve) => {
          const checkInterval = setInterval(() => {
              const element = document.querySelector(selector);
              if (element) {
                  clearInterval(checkInterval);
                  resolve(element);
              }
          }, 10);
      });
  }
}
 
Scratch.extensions.register(new cjjgc)

window.tempExt = {
  Extension: cjjgc,
  info: {
    name: '跳过警告窗',
    description: '再见，警告窗',
    extensionId: 'cjjgc',
    featured: true,
    disabled: false,
    iconURL: "https://m.ccw.site/works-covers/2b8f5cf0-bc8e-474e-b18a-9b06da529196.png",
    insetIconURL: cj_icon,
    collaboratorList: [
      {
        collaborator: 'Chen-Jin @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/678cc9343778fc282d6252c5',
      },
    ],
  },
};
