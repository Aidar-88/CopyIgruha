import { useState } from "react"
import Button from "./Button/Button"
import CurrentTime from "./CurrentTime"


const FeedbackSection = () => {

    const [name, setName] = useState('')
    const [reason, setReason] = useState('help')
    const [hasError, setHasError] = useState(false)

    const handleNameChange = (e) => {
        setName(e.target.value)
        setHasError(e.target.value.trim().length === 0)
    }



    return (
        <section>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Обратная связь</h3>
                <CurrentTime />
            </div>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    id="name"
                    className="controlInput"
                    value={name}
                    style={{ border: hasError ? '1px solid red' : null, }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращение</label>
                <select
                    id="reason"
                    className="controlInput"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <div>
                    <Button>Отправить</Button>
                    <Button>Назад в Главный Экран</Button>
                </div>
            </form>


        </section>
    )

}

export default FeedbackSection;