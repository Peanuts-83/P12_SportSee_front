import { render } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from '../App';


let container = null;
describe('Unit test for Dashboard, interface', () => {
  beforeEach(() => {
    // met en place un élément DOM comme cible de rendu
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it('renders with large display greater or equal to 1024x768', () => {
    render(<App />, container);
    Object.defineProperties(window, {
      'innerWidth': {value: 1024},
      'innerHeight': {value: 768}
    })
    window.dispatchEvent(new Event('resize'))
    expect(window.innerWidth).toBe(1024);
    expect(window.innerHeight).toBe(768);

    Object.defineProperties(window, {
      'innerWidth': {value: 1200},
      'innerHeight': {value: 900}
    })
    window.dispatchEvent(new Event('resize'))
    expect(window.innerWidth).toBeGreaterThan(1024);
    expect(window.innerHeight).toBeGreaterThan(768);
  });

})
