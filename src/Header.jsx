import chefLogo from './assets/image.png';

export default function Header(){
    return (
        <>
        <header className='head'>
            <img src={chefLogo} alt="chef-logo" className="chef-logo" />
            <div>CHEF CLAUDE</div>
        </header>
        </>
    )
}
