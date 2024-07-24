import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

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
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, omnis! Pariatur voluptas eaque nulla officia
                        architecto, ducimus sapiente sequi rem? Aliquam minima
                        cumque, laborum aperiam magni dolorum architecto quis
                        omnis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, omnis! Pariatur voluptas eaque nulla officia
                        architecto, ducimus sapiente sequi rem? Aliquam minima
                        cumque, laborum aperiam magni dolorum architecto quis
                        omnis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, omnis! Pariatur voluptas eaque nulla officia
                        architecto, ducimus sapiente sequi rem? Aliquam minima
                        cumque, laborum aperiam magni dolorum architecto quis
                        omnis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, omnis! Pariatur voluptas eaque nulla officia
                        architecto, ducimus sapiente sequi rem? Aliquam minima
                        cumque, laborum aperiam magni dolorum architecto quis
                        omnis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, omnis! Pariatur voluptas eaque nulla officia
                        architecto, ducimus sapiente sequi rem? Aliquam minima
                        cumque, laborum aperiam magni dolorum architecto quis
                        omnis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, omnis! Pariatur voluptas eaque nulla officia
                        architecto, ducimus sapiente sequi rem? Aliquam minima
                        cumque, laborum aperiam magni dolorum architecto quis
                        omnis?
                    </p>
                </AccordionBody>
            </Accordion>
        </>
    );
}

export default AccordionCustomIcon;
