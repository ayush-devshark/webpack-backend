const url = window.location.pathname;

if (url === '/hello-world-page') {
    import('HelloWorldApp/HelloWorldPage').then(HelloWorldPageModule => {
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = HelloWorldPage();
        helloWorldPage.render();
    });
} else if (url === '/kiwi-page') {
    import('KiwiApp/KiwiPage').then(KiwiPageModule => {
        const KiwiPage = KiwiPageModule.default;
        const kiwiPage = KiwiPage();
        kiwiPage.render();
    });
}

console.log('dashboard');
