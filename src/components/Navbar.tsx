export default function Navbar() {
  return (
    <div className="py-3 px-4 flex items-center" style={{borderBottom: '1px solid #E7E5E4'}}>
      <svg className="mr-2 text-emerald-500" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M6 21h12c-1 0-3-.6-3-3v-2H3v2c0 2.4 2 3 3 3z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13c0 1-.6 3-3 3m0 0H6c-1 0-3-.6-3-3v-2h12v2c0 2.4 2 3 3 3z"/></g></svg>
      <div>小贴纸</div>
    </div>
  )
}
