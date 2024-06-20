import React from "react";
import { Overlay, Window } from "./modal.styled";
import { createPortal } from "react-dom";

const modalRoot: null | Element = document.querySelector("#modal-root");

export type ChildrenModal = {
    children: React.ReactElement;
};

export default function Modal({ children}: ChildrenModal) {
    return createPortal(
        <Overlay >
            <Window>
                {children}
            </Window>
        </Overlay>,
        modalRoot as Element
    );
}