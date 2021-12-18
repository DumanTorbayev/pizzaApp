import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'

import Home from '../pages/Home'

describe('Home', () => {
  it('renders Home component', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    //expect(screen.getByText(/Order Now/i)).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})

export {}
