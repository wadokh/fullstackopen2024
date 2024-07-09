import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'
import { expect } from 'vitest'

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'tester',
    url: 'abc.com',
    likes: 0,
    user: {
      username: 'tester'
    }
  }

  const user = {
    username: 'notTester'
  }

  render(<Blog blog={blog} user={user} />)

  const element = screen.getByText('Component testing is done with react-testing-library tester')
  expect(element).toBeDefined()
  const likes = screen.queryByText('likes')
  expect(likes).toBeNull()
  const url = screen.queryAllByText('abc.com')
  expect(url).toBeNull
})

test('clicking the button render url and likes', async () =>
{
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'tester',
    url: 'abc.com',
    likes: 0,
    user: {
      username: 'tester'
    }
  }

  const userid = {
    username: 'notTester'
  }

  render(<Blog blog={blog} user={userid} />)

  const user = userEvent.setup()
  const button = screen.getByRole('button')
  await user.click(button)
  const likes = screen.queryByText('likes')
  expect(likes).toBeDefined()
  const url = screen.queryAllByText('abc.com')
  expect(url).toBeDefined()
})

test('clicking the like button calls event handler once', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'tester',
    url: 'abc.com',
    likes: 0,
    user: {
      username: 'tester'
    }
  }

  const userid = {
    username: 'notTester'
  }

  const mockHandler = vi.fn()


  render(<Blog blog={blog} user={userid} addLike={mockHandler}/>)

  const user = userEvent.setup()
  const button = screen.getByRole('button')
  await user.click(button)
  const like = screen.getAllByRole('button')[1]
  await user.click(like)

  expect(mockHandler.mock.calls).toHaveLength(1)
  await user.click(like)
  expect(mockHandler.mock.calls).toHaveLength(2)

})