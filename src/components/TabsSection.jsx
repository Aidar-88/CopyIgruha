import Button from '../components/Button/Button'

const TabsSection = ({ active, onChange }) => {
    return (
        <section style={{ margin: "1rem", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                    isActive={active === 'main'}
                    onClick={() => { onChange('main') }} >Главная</Button>
                <Button
                    isActive={active === 'feedback'}
                    onClick={() => { onChange('feedback') }} >Обратная связь</Button>
            </div>

        </section>
    );
}

export default TabsSection;