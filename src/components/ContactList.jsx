import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient.js'

function ContactList() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchContacts() {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('contacts')
          .select('*')

        if (error) throw error
        setContacts(data)
      } catch (error) {
        console.error('Error fetching contacts:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchContacts()
  }, [])

  if (loading) return <div>Loading contacts...</div>
  if (error) return <div>Error: {error}</div>
  if (!contacts.length) return <div>No contacts found</div>

  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <ul>
        {contacts.map(c => (
          <li key={c.id} className="contact-item">
            <strong>{c.name}</strong> - {c.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
