const LanguageFiltersData = (props)=>{
    const{languageData,OnLanguageSend} = props
    const{id,language} = languageData
    const OnclickedLanguage = ()=>{
       
        OnLanguageSend(language)
    }
    return(
        <div className="header-links">
            <div className="div-1" onClick={OnclickedLanguage}>
               {language}
            </div>
            
        </div>
    )
}

export default LanguageFiltersData