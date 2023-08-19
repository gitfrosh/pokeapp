import React from 'react';
import { render } from '@testing-library/react';
import PokemonCard from "./pokemon"
import '@testing-library/jest-dom'


describe('<PokemonCard />', () => {
    const mockPokemon = {
        name: "Mew",
        sprites: {
            front_default: "path-to-image.jpg"
        },
        types: [
            { type: { name: "Electric" } }
        ],
        stats: [
            { base_stat: 100 }
        ]
    };

    it('displays the pokemon name', () => {
        const { getByText } = render(<PokemonCard pokemon={mockPokemon} />);
        expect(getByText('Mew')).toBeInTheDocument();
    });
});

//     it('displays the pokemon type', () => {
//         const { getByText } = render(<Card pokemon={mockPokemon} />);
//         expect(getByText('Electric')).toBeInTheDocument();
//     });

//     it('triggers the onClick when clicked', () => {
//         const toggleModal = jest.fn();
//         const { getByRole } = render(<Card pokemon={mockPokemon} onClick={() => toggleModal(true)} />);
//         fireEvent.click(getByRole('button', { name: 'Catch' }));
//         expect(toggleModal).toHaveBeenCalledWith(true);
//     });

//     // Add more tests based on your requirements...
// });