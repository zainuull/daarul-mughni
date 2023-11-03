

export async function getDataEvents() {
  const res = await fetch(`http://localhost:3000/api/event`, {
    cache: 'force-cache',
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    throw new Error('Data failed to Fetching');
  }

  return res.json();
}
