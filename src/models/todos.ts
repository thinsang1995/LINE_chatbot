import { Table, Model, Column, DataType } from 'sequelize-typescript'

@Table({
  timestamps: false,
  tableName: 'todos',
})
export class Todos extends Model<Todos> {
  @Column(DataType.STRING)
  name: string

  @Column(DataType.STRING)
  description: string
}
