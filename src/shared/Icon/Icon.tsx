import sprite from "../svg/sprite.svg";

interface IIconProps {
    styles?: React.CSSProperties;
    width?: number;
    height?: number;
    iconId: string;
}

const Icon = ({ styles, width, height, iconId }: IIconProps) => {
    return (
        <svg style={styles} width={width} height={height}>
            <use href={`${sprite}#${iconId}`}></use>
        </svg>
    );
};

export { Icon };
