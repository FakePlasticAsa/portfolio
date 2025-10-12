type ToggleButtonProps = {
    onClick: () => void;
    label: string;
  };
  
  export default function ToggleButton({ onClick, label }: ToggleButtonProps) {
    return (
      <button onClick={onClick} style={{ marginRight: "10px" }}>
        {label}
      </button>
    );
  }
  