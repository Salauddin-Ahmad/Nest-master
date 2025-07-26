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
                                            'data-bs-target="#controllers-links-module-AppModule-f8e3ec7c969d0177216fc4c4f4054d7e3ce3d62f7b281b2f3e434ae3e2a3d048730fff2f106166f24d438687ed1dd451507f52e1b7ab287c362452c160c2a3fb"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f8e3ec7c969d0177216fc4c4f4054d7e3ce3d62f7b281b2f3e434ae3e2a3d048730fff2f106166f24d438687ed1dd451507f52e1b7ab287c362452c160c2a3fb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f8e3ec7c969d0177216fc4c4f4054d7e3ce3d62f7b281b2f3e434ae3e2a3d048730fff2f106166f24d438687ed1dd451507f52e1b7ab287c362452c160c2a3fb"' :
                                            'id="xs-controllers-links-module-AppModule-f8e3ec7c969d0177216fc4c4f4054d7e3ce3d62f7b281b2f3e434ae3e2a3d048730fff2f106166f24d438687ed1dd451507f52e1b7ab287c362452c160c2a3fb"' }>
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
                                        'data-bs-target="#injectables-links-module-AppModule-f8e3ec7c969d0177216fc4c4f4054d7e3ce3d62f7b281b2f3e434ae3e2a3d048730fff2f106166f24d438687ed1dd451507f52e1b7ab287c362452c160c2a3fb"' : 'data-bs-target="#xs-injectables-links-module-AppModule-f8e3ec7c969d0177216fc4c4f4054d7e3ce3d62f7b281b2f3e434ae3e2a3d048730fff2f106166f24d438687ed1dd451507f52e1b7ab287c362452c160c2a3fb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f8e3ec7c969d0177216fc4c4f4054d7e3ce3d62f7b281b2f3e434ae3e2a3d048730fff2f106166f24d438687ed1dd451507f52e1b7ab287c362452c160c2a3fb"' :
                                        'id="xs-injectables-links-module-AppModule-f8e3ec7c969d0177216fc4c4f4054d7e3ce3d62f7b281b2f3e434ae3e2a3d048730fff2f106166f24d438687ed1dd451507f52e1b7ab287c362452c160c2a3fb"' }>
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
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-797b24476a8c51eae541e1e6f9bfa9fc65b931590133fa0c183baeabd6584b37ab91a2973f60a6490ff5540851457464531cff580eafdda337f210c6459999c8"' : 'data-bs-target="#xs-controllers-links-module-PostModule-797b24476a8c51eae541e1e6f9bfa9fc65b931590133fa0c183baeabd6584b37ab91a2973f60a6490ff5540851457464531cff580eafdda337f210c6459999c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-797b24476a8c51eae541e1e6f9bfa9fc65b931590133fa0c183baeabd6584b37ab91a2973f60a6490ff5540851457464531cff580eafdda337f210c6459999c8"' :
                                            'id="xs-controllers-links-module-PostModule-797b24476a8c51eae541e1e6f9bfa9fc65b931590133fa0c183baeabd6584b37ab91a2973f60a6490ff5540851457464531cff580eafdda337f210c6459999c8"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-797b24476a8c51eae541e1e6f9bfa9fc65b931590133fa0c183baeabd6584b37ab91a2973f60a6490ff5540851457464531cff580eafdda337f210c6459999c8"' : 'data-bs-target="#xs-injectables-links-module-PostModule-797b24476a8c51eae541e1e6f9bfa9fc65b931590133fa0c183baeabd6584b37ab91a2973f60a6490ff5540851457464531cff580eafdda337f210c6459999c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-797b24476a8c51eae541e1e6f9bfa9fc65b931590133fa0c183baeabd6584b37ab91a2973f60a6490ff5540851457464531cff580eafdda337f210c6459999c8"' :
                                        'id="xs-injectables-links-module-PostModule-797b24476a8c51eae541e1e6f9bfa9fc65b931590133fa0c183baeabd6584b37ab91a2973f60a6490ff5540851457464531cff580eafdda337f210c6459999c8"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-ba3d8e350e0c0dd7414a2e20aa999167d0d45f1ac53881903ca137350fc9f750c911277848b54cfb9a60d56361b53b3ef380df5aed38802e44a4514564f77d4a"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-ba3d8e350e0c0dd7414a2e20aa999167d0d45f1ac53881903ca137350fc9f750c911277848b54cfb9a60d56361b53b3ef380df5aed38802e44a4514564f77d4a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-ba3d8e350e0c0dd7414a2e20aa999167d0d45f1ac53881903ca137350fc9f750c911277848b54cfb9a60d56361b53b3ef380df5aed38802e44a4514564f77d4a"' :
                                            'id="xs-controllers-links-module-UsersModule-ba3d8e350e0c0dd7414a2e20aa999167d0d45f1ac53881903ca137350fc9f750c911277848b54cfb9a60d56361b53b3ef380df5aed38802e44a4514564f77d4a"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-ba3d8e350e0c0dd7414a2e20aa999167d0d45f1ac53881903ca137350fc9f750c911277848b54cfb9a60d56361b53b3ef380df5aed38802e44a4514564f77d4a"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-ba3d8e350e0c0dd7414a2e20aa999167d0d45f1ac53881903ca137350fc9f750c911277848b54cfb9a60d56361b53b3ef380df5aed38802e44a4514564f77d4a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-ba3d8e350e0c0dd7414a2e20aa999167d0d45f1ac53881903ca137350fc9f750c911277848b54cfb9a60d56361b53b3ef380df5aed38802e44a4514564f77d4a"' :
                                        'id="xs-injectables-links-module-UsersModule-ba3d8e350e0c0dd7414a2e20aa999167d0d45f1ac53881903ca137350fc9f750c911277848b54cfb9a60d56361b53b3ef380df5aed38802e44a4514564f77d4a"' }>
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
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
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