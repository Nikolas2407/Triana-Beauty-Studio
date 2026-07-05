import { useState } from 'react';
import { motion } from 'motion/react'
import styles from './css/Reservar.module.css'

export default function Reservar({  onClose }: { onClose: () => void  }) {
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    
    const reservar = () => {
    console.log('Reservar Ahora')
    if (!fecha || !hora) {
        alert('Por favor, selecciona una fecha y hora antes de reservar.');
        return;
    }

    const mensaje = `¡Hola Laura! Me gustaría reservar una cita para el ${fecha} a las ${hora}.`;
    const numero = "573123048235";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
     onClose(); 

} 
return(
    <>

  <div className={styles.modalElemento}>
    <div className={styles.modalContenido}>
      <h2>📅 Reserva tu cita</h2>

      <div className={styles.campo}>
        <label>Fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <div className={styles.campo}>
        <label>Hora</label>
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </div>

      <div className={styles.acciones}>
      <button onClick={onClose}>
        Cancelar
      </button>

        <button onClick={reservar}>
          Confirmar
        </button>
      </div>
    </div>
  </div>

   </>
)
}