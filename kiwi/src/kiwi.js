import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';

const heading = new Heading();
heading.render('kiwi');
const kiwiImage = new KiwiImage();
kiwiImage.render();

// Button loaded dynamically at runtime
import('HelloWorldApp/HelloWorldButton').then(HelloWordButtonModule => {
    const HelloWorldButton = HelloWordButtonModule.default;
    const helloWorldButton = new HelloWorldButton();
    helloWorldButton.render();
});
