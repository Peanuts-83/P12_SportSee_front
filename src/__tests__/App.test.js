/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from '../App';
import Header from '../components/dashboard/Header';
// import Weight from '../components/dashboard/Weight';
// import Duration from '../components/dashboard/Duration';
// import Radar from '../components/dashboard/Radar';
// import Score from '../components/dashboard/Score';
// import Counter from '../components/dashboard/Counter';
import mockedData from '../assets/mockedData/data';
import { act } from 'react-dom/test-utils';


let container = null;
describe('Unit test for App, interface', () => {
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

  it('should render with large display greater or equal to 1024x768', () => {
    act(() => {
      render(<App />, container);
    })
    Object.defineProperties(window, {
      'innerWidth': { value: 1024 },
      'innerHeight': { value: 768 }
    })
    window.dispatchEvent(new Event('resize'))
    expect(window.innerWidth).toBe(1024);
    expect(window.innerHeight).toBe(768);

    Object.defineProperties(window, {
      'innerWidth': { value: 1200 },
      'innerHeight': { value: 900 }
    })
    window.dispatchEvent(new Event('resize'))
    expect(window.innerWidth).toBeGreaterThan(1024);
    expect(window.innerHeight).toBeGreaterThan(768);
  });

  it('should display user firstname in Dashboard', () => {
    act(() => {
      render(<Header firstname="Karl" />, container)
    })
    const firstname = screen.getByTestId('firstname')
    const firstUserName = mockedData.USER_MAIN_DATA[0].userInfos.firstName
    expect(firstname.textContent).toBe(firstUserName)
  })
})
