import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../Redux/Store/Store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Hotel from '../Components/Hotel';

afterEach(() => {
  cleanup();
});

describe('Hotel component tests', () => {
  render(
    <Provider store={store}>
      <Router>
        <Hotel
          id="1"
          name="Hotel Il Pellicano, Porto Ercole, Italy"
          address="Porto Ercole, Italy"
          description="A favorite hideaway for movie stars of Hollywood's golden age, Hotel Il Pellicano exudes timeless elegance and understated luxury. Perched on the Tuscan coast amid tranquil gardens, the hotel's rooms and suites have garden or sea views, and the restaurant features Italian cuisine that has earned it one Michelin star."
          price="5500"
          image="https://i.vimeocdn.com/video/1123408936-b7516ea04851535c75a7a15c0b82619097ff710a9cd3e3f33f60f7ca707ce1cc-d?mw=1100&mh=2200&q=70"
        />
      </Router>
    </Provider>,
  );

  const hotel = screen.getByTestId('hotel-card');

  test('Should Render Hotel Component', () => {
    expect(hotel).toBeInTheDocument();
  });
  test('Component should contain Porto Ercole, Italy', () => {
    expect(hotel).toHaveTextContent('Porto Ercole, Italy');
  });

  test('Component should contain Porto Ercole, Italy', () => {
    expect(hotel).not.toHaveTextContent('Welcome to my page');
  });
});
