import { render, screen } from '@testing-library/react'
import BlogForm from './BlogForm'
import userEvent from '@testing-library/user-event'

test('<BlogForm /> updates parent state and calls onSubmit with correct data', async () => {
  const createBlog = vi.fn()
  const user = userEvent.setup()

  const { container } = render(<BlogForm createBlog={createBlog} />)

  const title = container.querySelector('#title-input')
  const author = container.querySelector('#author-input')
  const url = container.querySelector('#url-input')

  const sendButton = screen.getByText('create')

  await user.type(title, 'testing a form\'s title input...')
  await user.type(author, 'testing a form\'s author input...')
  await user.type(url, 'testing a form\'s url input...')

  await user.click(sendButton)

  expect(createBlog.mock.calls).toHaveLength(1)
  expect(createBlog.mock.calls[0][0].title).toBe('testing a form\'s title input...')
  expect(createBlog.mock.calls[0][0].author).toBe('testing a form\'s author input...')
  expect(createBlog.mock.calls[0][0].url).toBe('testing a form\'s url input...')

})