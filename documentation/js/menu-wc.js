'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-master documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-b32c05e349ff5d1e1e4bf701242898eb9999e12b22ffdd187df883fa8937ddb75691ae38f0c1e643ac00c700f3ff0295b86e5891c90d8b97f355c12f6027c420"' : 'data-bs-target="#xs-controllers-links-module-AppModule-b32c05e349ff5d1e1e4bf701242898eb9999e12b22ffdd187df883fa8937ddb75691ae38f0c1e643ac00c700f3ff0295b86e5891c90d8b97f355c12f6027c420"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b32c05e349ff5d1e1e4bf701242898eb9999e12b22ffdd187df883fa8937ddb75691ae38f0c1e643ac00c700f3ff0295b86e5891c90d8b97f355c12f6027c420"' :
                                            'id="xs-controllers-links-module-AppModule-b32c05e349ff5d1e1e4bf701242898eb9999e12b22ffdd187df883fa8937ddb75691ae38f0c1e643ac00c700f3ff0295b86e5891c90d8b97f355c12f6027c420"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-b32c05e349ff5d1e1e4bf701242898eb9999e12b22ffdd187df883fa8937ddb75691ae38f0c1e643ac00c700f3ff0295b86e5891c90d8b97f355c12f6027c420"' : 'data-bs-target="#xs-injectables-links-module-AppModule-b32c05e349ff5d1e1e4bf701242898eb9999e12b22ffdd187df883fa8937ddb75691ae38f0c1e643ac00c700f3ff0295b86e5891c90d8b97f355c12f6027c420"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b32c05e349ff5d1e1e4bf701242898eb9999e12b22ffdd187df883fa8937ddb75691ae38f0c1e643ac00c700f3ff0295b86e5891c90d8b97f355c12f6027c420"' :
                                        'id="xs-injectables-links-module-AppModule-b32c05e349ff5d1e1e4bf701242898eb9999e12b22ffdd187df883fa8937ddb75691ae38f0c1e643ac00c700f3ff0295b86e5891c90d8b97f355c12f6027c420"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ec7be40153e38471b3cbc172c9d6c356dff76c87709bf1e84d80f7593d2492c7a50200065dec4c85dc18ca779adf690fc207ef690b88b4caf7a6a48a308e8590"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ec7be40153e38471b3cbc172c9d6c356dff76c87709bf1e84d80f7593d2492c7a50200065dec4c85dc18ca779adf690fc207ef690b88b4caf7a6a48a308e8590"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ec7be40153e38471b3cbc172c9d6c356dff76c87709bf1e84d80f7593d2492c7a50200065dec4c85dc18ca779adf690fc207ef690b88b4caf7a6a48a308e8590"' :
                                            'id="xs-controllers-links-module-AuthModule-ec7be40153e38471b3cbc172c9d6c356dff76c87709bf1e84d80f7593d2492c7a50200065dec4c85dc18ca779adf690fc207ef690b88b4caf7a6a48a308e8590"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ec7be40153e38471b3cbc172c9d6c356dff76c87709bf1e84d80f7593d2492c7a50200065dec4c85dc18ca779adf690fc207ef690b88b4caf7a6a48a308e8590"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ec7be40153e38471b3cbc172c9d6c356dff76c87709bf1e84d80f7593d2492c7a50200065dec4c85dc18ca779adf690fc207ef690b88b4caf7a6a48a308e8590"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ec7be40153e38471b3cbc172c9d6c356dff76c87709bf1e84d80f7593d2492c7a50200065dec4c85dc18ca779adf690fc207ef690b88b4caf7a6a48a308e8590"' :
                                        'id="xs-injectables-links-module-AuthModule-ec7be40153e38471b3cbc172c9d6c356dff76c87709bf1e84d80f7593d2492c7a50200065dec4c85dc18ca779adf690fc207ef690b88b4caf7a6a48a308e8590"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MetaOptionsModule.html" data-type="entity-link" >MetaOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MetaOptionsModule-bccb1a72a4ca17aefc6b5db93b65a62d338cf294c454828321dfba234a927cd21bcad356fd623ffd3e7b416b6c6cb2472b01d797863d510f38b013d056a057d0"' : 'data-bs-target="#xs-controllers-links-module-MetaOptionsModule-bccb1a72a4ca17aefc6b5db93b65a62d338cf294c454828321dfba234a927cd21bcad356fd623ffd3e7b416b6c6cb2472b01d797863d510f38b013d056a057d0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MetaOptionsModule-bccb1a72a4ca17aefc6b5db93b65a62d338cf294c454828321dfba234a927cd21bcad356fd623ffd3e7b416b6c6cb2472b01d797863d510f38b013d056a057d0"' :
                                            'id="xs-controllers-links-module-MetaOptionsModule-bccb1a72a4ca17aefc6b5db93b65a62d338cf294c454828321dfba234a927cd21bcad356fd623ffd3e7b416b6c6cb2472b01d797863d510f38b013d056a057d0"' }>
                                            <li class="link">
                                                <a href="controllers/MetaOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MetaOptionsModule-bccb1a72a4ca17aefc6b5db93b65a62d338cf294c454828321dfba234a927cd21bcad356fd623ffd3e7b416b6c6cb2472b01d797863d510f38b013d056a057d0"' : 'data-bs-target="#xs-injectables-links-module-MetaOptionsModule-bccb1a72a4ca17aefc6b5db93b65a62d338cf294c454828321dfba234a927cd21bcad356fd623ffd3e7b416b6c6cb2472b01d797863d510f38b013d056a057d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MetaOptionsModule-bccb1a72a4ca17aefc6b5db93b65a62d338cf294c454828321dfba234a927cd21bcad356fd623ffd3e7b416b6c6cb2472b01d797863d510f38b013d056a057d0"' :
                                        'id="xs-injectables-links-module-MetaOptionsModule-bccb1a72a4ca17aefc6b5db93b65a62d338cf294c454828321dfba234a927cd21bcad356fd623ffd3e7b416b6c6cb2472b01d797863d510f38b013d056a057d0"' }>
                                        <li class="link">
                                            <a href="injectables/MetaOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MetaOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-bdf45f8e53952fe650d25f5be4ddc8a5235b1336ecc116f4615ea2b1f831ae777d7c35df4c7514631d9bab2361b0be65a14c59dc36b474af8e2955fd2a495716"' : 'data-bs-target="#xs-controllers-links-module-PostModule-bdf45f8e53952fe650d25f5be4ddc8a5235b1336ecc116f4615ea2b1f831ae777d7c35df4c7514631d9bab2361b0be65a14c59dc36b474af8e2955fd2a495716"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-bdf45f8e53952fe650d25f5be4ddc8a5235b1336ecc116f4615ea2b1f831ae777d7c35df4c7514631d9bab2361b0be65a14c59dc36b474af8e2955fd2a495716"' :
                                            'id="xs-controllers-links-module-PostModule-bdf45f8e53952fe650d25f5be4ddc8a5235b1336ecc116f4615ea2b1f831ae777d7c35df4c7514631d9bab2361b0be65a14c59dc36b474af8e2955fd2a495716"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-bdf45f8e53952fe650d25f5be4ddc8a5235b1336ecc116f4615ea2b1f831ae777d7c35df4c7514631d9bab2361b0be65a14c59dc36b474af8e2955fd2a495716"' : 'data-bs-target="#xs-injectables-links-module-PostModule-bdf45f8e53952fe650d25f5be4ddc8a5235b1336ecc116f4615ea2b1f831ae777d7c35df4c7514631d9bab2361b0be65a14c59dc36b474af8e2955fd2a495716"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-bdf45f8e53952fe650d25f5be4ddc8a5235b1336ecc116f4615ea2b1f831ae777d7c35df4c7514631d9bab2361b0be65a14c59dc36b474af8e2955fd2a495716"' :
                                        'id="xs-injectables-links-module-PostModule-bdf45f8e53952fe650d25f5be4ddc8a5235b1336ecc116f4615ea2b1f831ae777d7c35df4c7514631d9bab2361b0be65a14c59dc36b474af8e2955fd2a495716"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagsModule.html" data-type="entity-link" >TagsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagsModule-35f541e394a5798a7846fc8042f4b59732e6967c019692a7b9523fd14e7226dea5d1b33fb31911b61bfab1390749cc44a851ff6b854f29403eac19fa92f02c79"' : 'data-bs-target="#xs-controllers-links-module-TagsModule-35f541e394a5798a7846fc8042f4b59732e6967c019692a7b9523fd14e7226dea5d1b33fb31911b61bfab1390749cc44a851ff6b854f29403eac19fa92f02c79"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagsModule-35f541e394a5798a7846fc8042f4b59732e6967c019692a7b9523fd14e7226dea5d1b33fb31911b61bfab1390749cc44a851ff6b854f29403eac19fa92f02c79"' :
                                            'id="xs-controllers-links-module-TagsModule-35f541e394a5798a7846fc8042f4b59732e6967c019692a7b9523fd14e7226dea5d1b33fb31911b61bfab1390749cc44a851ff6b854f29403eac19fa92f02c79"' }>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-08989bd1b8efca0d228a7bdf9f05335f85652a74e18a7bc25ac33084d95c31f668db10e4b5911dc3995fd76d8840efdb99be02d69b8a635449259c62c4067762"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-08989bd1b8efca0d228a7bdf9f05335f85652a74e18a7bc25ac33084d95c31f668db10e4b5911dc3995fd76d8840efdb99be02d69b8a635449259c62c4067762"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-08989bd1b8efca0d228a7bdf9f05335f85652a74e18a7bc25ac33084d95c31f668db10e4b5911dc3995fd76d8840efdb99be02d69b8a635449259c62c4067762"' :
                                            'id="xs-controllers-links-module-UsersModule-08989bd1b8efca0d228a7bdf9f05335f85652a74e18a7bc25ac33084d95c31f668db10e4b5911dc3995fd76d8840efdb99be02d69b8a635449259c62c4067762"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-08989bd1b8efca0d228a7bdf9f05335f85652a74e18a7bc25ac33084d95c31f668db10e4b5911dc3995fd76d8840efdb99be02d69b8a635449259c62c4067762"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-08989bd1b8efca0d228a7bdf9f05335f85652a74e18a7bc25ac33084d95c31f668db10e4b5911dc3995fd76d8840efdb99be02d69b8a635449259c62c4067762"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-08989bd1b8efca0d228a7bdf9f05335f85652a74e18a7bc25ac33084d95c31f668db10e4b5911dc3995fd76d8840efdb99be02d69b8a635449259c62c4067762"' :
                                        'id="xs-injectables-links-module-UsersModule-08989bd1b8efca0d228a7bdf9f05335f85652a74e18a7bc25ac33084d95c31f668db10e4b5911dc3995fd76d8840efdb99be02d69b8a635449259c62c4067762"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MetaOptionsController.html" data-type="entity-link" >MetaOptionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagsController.html" data-type="entity-link" >TagsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/MetaoptionEntity.html" data-type="entity-link" >MetaoptionEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PostEntity.html" data-type="entity-link" >PostEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TagEntity.html" data-type="entity-link" >TagEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamDto.html" data-type="entity-link" >GetUserParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaOptionsService.html" data-type="entity-link" >MetaOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});