import mongoose from 'mongoose'

export interface ICategory {
  _id?: string
  name: string
  slug: string
  description?: string
  image?: string
  order: number
  isActive: boolean
  createdAt?: Date
  updatedAt?: Date
}

const CategorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

export default mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema) 