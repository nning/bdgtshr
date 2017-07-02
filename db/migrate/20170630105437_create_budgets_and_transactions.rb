class CreateBudgetsAndTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :budgets do |t|
      t.string :slug, null: false
      t.integer :balance, default: 0

      t.timestamps
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
