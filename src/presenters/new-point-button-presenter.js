import Presenter from './presenter';

/**
 * @extends {Presenter<HTMLButtonElement>}
 */
export default class NewPointButtonPresenter extends Presenter {
  constructor() {
    super(...arguments);
    console.log(this);

    this.view.addEventListener('click', this.handleViewClick.bind(this));
  }

  /**
   * @override
   */
  handleNavigation() {
    this.view.disabled = (this.location.pathname === '/new');
  }

  handleViewClick() {
    this.navigate('/new');
  }
}
