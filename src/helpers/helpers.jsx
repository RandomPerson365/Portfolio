export const openProfileTab = (gh, li, lc, cc, hr, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === li.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === lc.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === cc.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === hr.current.uuid)
    window.open("", "new");
};

export const openProjectTab = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open("", "new");
};

export const openProjectGithub = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open(
      "",
      "new"
    );
};
