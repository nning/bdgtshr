class CreateBudgetsAndTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :budgets do |t|
      t.string :slug, null: false
      t.integer :monthly, default: 0
      t.integer :weekly, default: 0
      t.integer :daily, default: 0

      t.timestamps

      t.index :slug
    end

    create_table :transactions do |t|
      t.string :key, null: false
      t.belongs_to :budget, index: true
      t.integer :value, null: false
      t.boolean :monthly, default: false

      t.timestamps
    end
  end
end
