import { PlusCircle, CheckCircle2, XCircle, CircleSlash } from "lucide-react";

type TGraphButton = {
  handleClick?: (v: any) => void;
  action: "create" | "delete" | "edit" | "confirm" | "cancel";
};

const GraphButton = ({ handleClick, action }: TGraphButton) => {
  const actionVariants = {
    create: {
      icon: <PlusCircle fill="#8e8d8d" stroke="#d6d6d6" />,
    },
    delete: {
      icon: <XCircle fill="#ee1047" stroke="#d6d6d6" />,
    },
    edit: {
      icon: <CircleSlash size={20} color="#8e8d8d" />,
    },
    confirm: {
      icon: <CheckCircle2 fill="#1eb803" stroke="#d6d6d6" />,
    },
    cancel: {
      icon: <XCircle size={20} fill="#fcf000" stroke="#666666" />,
    },
  };
  return (
    <button
      onClick={handleClick}
      style={{
        width: action === "edit" || action === "cancel" ? 20 : 24,
        height: action === "edit" || action === "cancel" ? 20 : 24,
      }}
      className="graph-button"
    >
      {actionVariants[action].icon}
    </button>
  );
};

export default GraphButton;
