const cj_icon = 'https://m.ccw.site/avatar/678cc9343778fc282d6252c5/4f8f1c67-6a2d-4670-bc70-a774bfe43b93.png';
const extensionId = 'cjorv'
class cjorv {
  constructor() {
    window.rt = Scratch.runtime;
    window.vm = Scratch.vm;
  }
  getInfo() {
    return {
      id: 'cjorv',
      name: '开放 runtime&vm',
      color1: '#00aeff',
      menuIconURI: cj_icon,
      blocks: [
        {
          opcode: 'orvzy',
          text: '占位（开放 runtime&vm）',
          blockType: null,
        }
      ],
    }
  }
  orvcy() {}
}
 
Scratch.extensions.register(new cjorv)

window.tempExt = {
  Extension: cjorv,
  info: {
    name: '跳过警告窗',
    description: '再见，警告窗',
    extensionId: 'cjorv',
    featured: true,
    disabled: false,
    // iconURL: "https://m.ccw.site/works-covers/2b8f5cf0-bc8e-474e-b18a-9b06da529196.png", 
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
