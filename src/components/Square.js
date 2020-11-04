import react from "react";

class Square extends react.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => {
                    this.props.onClick();
                }}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square;
