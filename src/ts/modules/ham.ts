import ScrollLock from "./scroll-lock";

let _ham: HTMLElement;
let _drawer: HTMLElement;

const ham = (hamEl: HTMLElement, drawerEl: HTMLElement) => {
  _ham = hamEl;
  _drawer = drawerEl;

  const locker = new ScrollLock();

  let isOpen = false;

  _ham.onclick = () => {
    rotate(isOpen);
    cross(isOpen);
    toggleDrawer(isOpen);
    locker.toggle();

    isOpen = !isOpen;
  };
};

const rotate = (isOpen: boolean) => {
  if (!isOpen) {
    _ham.style.transform = 'rotateZ(1080deg)';
  } else {
    _ham.style.transform = 'rotateZ(-1080deg)';
  }
};

const cross = (isOpen: boolean) => {
  const crossArms = _ham.querySelectorAll(
    'span.ham__arms--cross'
  ) as NodeListOf<HTMLSpanElement>;
  const arms = _ham.querySelectorAll(
    'span.ham__arms'
  ) as NodeListOf<HTMLSpanElement>;

  crossArms.forEach((arm) => {
    if (!isOpen) arm.style.opacity = '1';
    else arm.style.opacity = '0';
  });

  arms.forEach((arm) => {
    if (!isOpen) arm.style.opacity = '0';
    else arm.style.opacity = '1';
  });
};

const toggleDrawer = (isOpen: boolean) => {
  isOpen
    ? _drawer.classList.replace('drawer--open', 'drawer--close')
    : _drawer.classList.replace('drawer--close', 'drawer--open');
};

export default ham;
