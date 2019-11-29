import React from 'react';
import PropTypes from 'prop-types';
import styles from './stats.module.css';

function bgColorRandomizer() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>
      {stats.map(stat => (
        <li
          className={styles.item}
          key={stat.id}
          style={{ background: bgColorRandomizer() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{`${stat.percentage}%`}</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Stats;
