import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { Provider } from 'react-redux';
import { store } from '../Redux/Store/Store';


afterEach(() => {
  cleanup();
});
describe('NavBar component', () => {
  render(
    <Provider store={store}>
      <Router>
        <NavBar />
      </Router>
    </Provider>,
  );

  const nav = screen.getByTestId('nav');
  it('Renders the Navbar', () => {
    expect(nav).toBeInTheDocument();
  });

  it('Renders the HotelList', () => {
    expect(nav).toHaveTextContent('HotelList');
  });

  it('Renders the Title', () => {
    expect(nav).toHaveTextContent('Find Hotel');
  });

  it('Renders the Favourites', () => {
    expect(nav).toHaveTextContent('Favourites');
  });

  it('Does not render Element not on the page', () => {
    expect(nav).not.toHaveTextContent('Contact');
  });
});
