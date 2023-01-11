import Presenter from './presenter';

/**
 * @extends {Presenter<NewPointEditorView>}
 */
export default class NewPointEditorPresenter extends Presenter {
  constructor() {
    super(...arguments);

    this.view.addEventListener('submit', this.handleViewSubmit.bind(this));
    this.view.addEventListener('reset', this.handleViewReset.bind(this));
    // Не понятно как работает
    this.view.addEventListener('close', this.handleViewClose.bind(this));
    // console.log(this);
  }

  /**
   * @override
   */
  handleNavigation() {
    if (this.location.pathname === '/new') {
      this.view.open();
    } else {
      this.view.close(false);
    }
  }

  /**
   * @param {SubmitEvent} event
   */
  handleViewSubmit(event) {
    event.preventDefault();
  }

  handleViewReset() {
    this.view.close();
    this.navigate('/');
  }

  handleViewClose() {
    this.navigate('/');
  }
}
