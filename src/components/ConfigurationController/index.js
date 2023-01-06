import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-container">
          <h2 className="config-title">Layout</h2>
          <div className="checkbox-container">
            <input
              checked={showContent}
              type="checkbox"
              id="content"
              onChange={onChangeShowContent}
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              checked={showLeftNavbar}
              type="checkbox"
              id="left"
              onChange={onChangeShowLeftNavbar}
            />
            <label className="label" htmlFor="left">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              checked={showRightNavbar}
              type="checkbox"
              id="right"
              onChange={onChangeShowRightNavbar}
            />
            <label className="label" htmlFor="right">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
