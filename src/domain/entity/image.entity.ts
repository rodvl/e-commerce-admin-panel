import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('image')
export class ImageE {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'bytea' })
  content: string;
}
