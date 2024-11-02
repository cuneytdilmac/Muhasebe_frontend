import { UserInformation } from "./DComponet";

interface BComponetProps{
  user?:UserInformation;
  setVisible(): void;
}

export const BComponet = (props:BComponetProps) => {

  return (
    <div style={{
      border: "1px solid blue",
      height: 180,
      margin: "24px 16px",
      padding: "16px 12px",
      display: "flex",
      flexDirection: "row"
    }}>
      B

      <img src={props.user?.image} alt=""
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          marginRight: 12,
        }}
      />

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginRight: 12
      }}>
        <p>Adı:</p>
        <p>Telefon:</p>
        <p>Email:</p>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginRight: 12

      }}>
        <p>{props.user?.name}</p>
        <p>{props.user?.phoneNumber}</p>
        <p>{props.user?.email}</p>
      </div>

      <div style={{
        display: "flex",
        alignItems: "flex-end"
      }}>
        <button style={{
          width: 100,
          height: 40,
          borderRadius: 10,
          backgroundColor: "#365486",
          color: "#EEF5FF"
        }} onClick={()=>props.setVisible()}>A'dan Veri Al</button>
      </div>
    </div>
  )
}