import mongoose from 'mongoose'

export interface IMenuItem {
  _id?: string
  name: string
  description: string
  price: number
  image?: string
  category: string
  allergens?: string[]
  isVegetarian: boolean
  isVegan: boolean
  isGlutenFree: boolean
  isSpicy: boolean
  isAvailable: boolean
  order: number
  createdAt?: Date
  updatedAt?: Date
}

const MenuItemSchema = new mongoose.Schema<IMenuItem>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  allergens: [{
    type: String,
    trim: true,
  }],
  isVegetarian: {
    type: Boolean,
    default: false,
  },
  isVegan: {
    type: Boolean,
    default: false,
  },
  isGlutenFree: {
    type: Boolean,
    default: false,
  },
  isSpicy: {
    type: Boolean,
    default: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
})

export default mongoose.models.MenuItem || mongoose.model<IMenuItem>('MenuItem', MenuItemSchema) 