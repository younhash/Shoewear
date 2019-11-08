# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create!(image: 'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', 
                name: 'shoe811',
                color: 'blue',
                size: 11,
                price: 150 )

# customer
Customer.create!(first_name: 'Ken',
                last_name: 'lemon',
                email: 'blueray@mna.com',
                address: '123 main st' )

# customer
Order.create!(customer_id: 1, product_id: 1)