import React from 'react';
import { Card, Button, Tag, Progress, Space } from 'antd';

function PokemonCard({ toggleModal, pokemon }) {
    console.log(pokemon);
    return (
        <Card
            onClick={() => toggleModal(true)}
            hoverable
            style={{
                width: 240,
                borderRadius: 15,
                textAlign: 'center'
            }}
            cover={<img alt={"Pikachu"} src={pokemon.sprites.front_default} />}
            actions={[
                <Button type="primary">Catch</Button>
            ]}
        >
            <h2 style={{ margin: 0 }}>{pokemon.name}</h2>
            {pokemon.types?.map(trait => <Tag>{trait.type.name}</Tag>)}<br />
            <Space><p>HP</p>
                <Progress steps={5} percent={pokemon.stats[0]?.base_stat * 100 / 255} showInfo={false} />
            </Space>
        </Card>
    );
}

export default PokemonCard;