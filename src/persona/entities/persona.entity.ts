import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombres: string;
  @Column()
  p_apellido: string;
  @Column()
  s_apellido: string;
  @Column()
  fecha_nacimiento: Date;
  @Column()
  celular: number;
  @Column({ default: true })
  estado: boolean;
  @Column()
  tutor: string;
  @Column()
  celuar_tutor: number;
  @Column()
  zona: string;
  @Column()
  calle_av: string;
  @Column()
  nro_puerta: string;
  @Column()
  ci: string;
  @Column()
  genero: string;
  @CreateDateColumn()
  createdAt: Date; // Se llenará automáticamente cuando se cree el registro.
  @UpdateDateColumn()
  updatedAt: Date; // Se actualizará automáticamente cada vez que el registro cambie.
}
