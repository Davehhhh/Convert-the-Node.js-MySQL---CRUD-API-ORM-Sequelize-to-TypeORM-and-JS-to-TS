import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number; // ✅ Fix: Added '!'

    @Column({ type: "varchar", length: 255, unique: true })
    email!: string; // ✅ Fix

    @Column({ type: "varchar", length: 255, select: false })
    passwordHash!: string; // ✅ Fix

    @Column({ type: "varchar", length: 255 })
    title!: string; // ✅ Fix

    @Column({ type: "varchar", length: 255 })
    firstName!: string; // ✅ Fix

    @Column({ type: "varchar", length: 255 })
    lastName!: string; // ✅ Fix

    @Column({ type: "varchar", length: 255 })
    role!: string; // ✅ Fix
}
