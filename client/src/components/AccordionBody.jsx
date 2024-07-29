import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import UserDataStore from "../store/userData";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

function AccordionCustomIcon() {
    const [open, setOpen] = React.useState(0);
    const [alwaysOpen, setAlwaysOpen] = React.useState(true);

    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            {/* <Accordion open={alwaysOpen}>
                <AccordionHeader onClick={handleAlwaysOpen}>
                    Открыть документ
                </AccordionHeader>
                <AccordionBody className=" h-40 overflow-y-auto">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe ullam neque quas aliquid accusamus sunt dolorem,
                        voluptate tenetur quaerat accusantium quae, ea atque
                        maxime ipsa, voluptates sapiente magni laboriosam
                        libero?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe ullam neque quas aliquid accusamus sunt dolorem,
                        voluptate tenetur quaerat accusantium quae, ea atque
                        maxime ipsa, voluptates sapiente magni laboriosam
                        libero?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe ullam neque quas aliquid accusamus sunt dolorem,
                        voluptate tenetur quaerat accusantium quae, ea atque
                        maxime ipsa, voluptates sapiente magni laboriosam
                        libero?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe ullam neque quas aliquid accusamus sunt dolorem,
                        voluptate tenetur quaerat accusantium quae, ea atque
                        maxime ipsa, voluptates sapiente magni laboriosam
                        libero?
                    </p>
                </AccordionBody>
            </Accordion> */}
            <Accordion open={alwaysOpen} className=" px-4 ">
                <AccordionHeader className=" mb-4" onClick={handleAlwaysOpen}>
                    Договор
                </AccordionHeader>
                <AccordionBody className=" h-80 overflow-y-auto text-lg">
                    <p className=" text-center mb-5 ">
                        ИНФОРМИРОВАННОЕ ДОБРОВОЛЬНОЕ СОГЛАСИЕ ПАЦИЕНТА НА
                        ОКАЗАНИЕ МЕДИЦИНСКИХ УСЛУГ В АМБУЛАТОРНО -
                        КОНСУЛЬТАТИВНОМ ЦЕНТРЕ ТОО «MEXEL HEALTH»{" "}
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я {UserDataStore.user.fio}, Иин {UserDataStore.user.iin}{" "}
                        , Адрес проживания {UserDataStore.user.adress} ,
                        Контактный телефон {UserDataStore.user.phone}.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я информирован(а), о том, что специалисты амбулаторно -
                        консультативного центра ТОО «MEXEL HEALTH» приложат все
                        условия для оказания мне высококвалифицированной
                        медицинской помощи.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я ознакомлен(а) и принимаю условия договора публичной
                        оферты по предоставлению платных медицинских услуг
                        (публичный договор) и свидетельством полного и
                        безоговорочного акцепта (принятия) условий
                        вышесказанного договора.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я даю добровольное согласие на включение и использование
                        своих персональных данных (фамилия, имя, отчество (при
                        его наличии), национальность, пол, дата рождения,
                        индивидуальный идентификационный номер, юридический
                        адрес, место жительства, абонентский номер средства
                        связи) и медицинских записей в информационных системах
                        ТОО «MEXEL HEALTH» и Министерства здравоохранения
                        Республики Казахстан (далее – МЗ РК) в целях обмена этой
                        информацией участниками процесса обследования и лечения.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я согласен(-а) в пользу платного лечения, и добровольно
                        отказываюсь от бесплатного лечения в других клиниках и
                        гарантирую оплату за оказанные услуги по Прейскуранту
                        цен ТОО «MEXEL HEALTH» на медицинские услуги без
                        предъявления в дальнейшем каких либо претензий.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я понимаю, что сокрытие информации о состоянии моего
                        здоровья может способствовать развитию осложнений.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        В целях получения лучших результатов лечения обязуюсь
                        представить лечащему врачу достоверную и полную
                        информацию обо всех проблемах, связанных со здоровьем, в
                        том числе об аллергических проявлениях или
                        индивидуальной непереносимости лекарственных препаратов,
                        обо всех перенесенных мною травмах, операциях,
                        заболеваниях, в т.ч. наличии инфекционного и иного
                        заболевания, представляющих опасность для окружающих. А
                        также предоставлении правдивых сведении о
                        наследственности, а также об употреблении алкоголя,
                        наркотических и токсических средств, об одновременном
                        лечении у других специалистов и выполнении их
                        рекомендаций. Я тем самым не буду возлагать
                        ответственность на лечебное учреждение и врачей за
                        последствия, которые могут возникнуть при отсутствии
                        данной информации.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я ознакомлен(а) со своими правами и обязанностями, а
                        также распорядком и правилами лечебно-охранительного
                        режима, установленного в амбулаторно - консультативном
                        центре ТОО «MEXEL HEALTH», и обязуюсь их соблюдать.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я ознакомлен(а) с правом на лечение и уход, с
                        уважительным отношением к достоинству, личностным
                        ценностям, убеждениям и правам
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я ознакомлен(а) с правом обратиться к другому врачу/в
                        другую организацию для получения альтернативного мнения
                        о диагнозе и лечении.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я ознакомлен(а) с правом на конфиденциальность личной и
                        медицинской информации, в том числе конфиденциальность
                        моих медицинских записей
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я ознакомлен(а) с правом на подачу жалобы по вопросам
                        лечения и ухода, а также правом на участие в процессе
                        реагирования на жалобу. Мне в доступной форме разъяснены
                        формы и порядок предоставления жалоб и предложений по
                        качеству оказания медицинской помощи
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Информацию о состоянии моего здоровья, результатах
                        обследования и лечения я разрешаю сообщать следующим
                        лицам: (Ф.И.О. лица которому разрешается сообщать
                        информацию о ходе лечения, указать родство/отношение,
                        телефон) {UserDataStore.user.fio}
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я информирован(а), что имею право отказаться от
                        обследования и лечения в любой момент, даже после
                        подписания информированного согласия, данное право может
                        быть реализовано после письменного отказа от лечения.{" "}
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я подтверждаю, что прочитал(а) и понял(а) все
                        вышеизложенное, имел(а) достаточное время и возможность
                        обсудить с моим лечащим врачом все интересующие меня и
                        непонятные мне вопросы, связанные с лечением моего
                        заболевания и отказом от него. На все заданные вопросы я
                        получил(а) удовлетворившие меня ответы и у меня не
                        осталось невыясненных вопросов к врачу.
                    </p>
                    <p className="mb-2 first-letter:ml-5 text-justify">
                        Я согласен (а), что мое информированное добровольное
                        согласие на оказание медицинских услуг распространяется
                        на все последующие мои обращения в ТОО «MEXEL HEALTH» в
                        течении одного календарного года с момента обращения.
                    </p>
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default AccordionCustomIcon;
