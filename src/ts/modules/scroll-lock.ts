export default class ScrollLock {
  /**
   *
   */
  private scrolled: number;
  private isLock: boolean;

  constructor() {
    this.scrolled = 0;
    this.isLock = false;    
  }

  public toggle(){
    this.isLock ? this.unlock() : this.lock();
  }

  private lock(){
    this.scrolled = window.scrollY;
    document.body.style.top =  `-${window.scrollY}px`;
    document.body.classList.add('scroll-lock');
    this.isLock = true;
  }

  private unlock(){
    window.scrollTo({top: this.scrolled});
    document.body.style.top = 'unset';
    document.body.classList.remove('scroll-lock');
    this.isLock = false;
  }

}
